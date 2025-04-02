# text_model/chatbot.py

from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
from langchain_core.runnables import RunnableMap
from text_model.prompt_template import chat_prompt
from langchain.memory import ConversationBufferMemory


class AIDoctorChatbot:
    def __init__(self, api_key):
        self.llm = ChatOpenAI(openai_api_key=api_key, temperature=0.7, model="gpt-3.5-turbo")
        self.memory = ConversationBufferMemory(return_messages=True)

        # We inject history manually from memory
        self.chain = (
            RunnableMap({
                "user_input": lambda x: x["user_input"],
                "age": lambda x: x["age"],
                "gender": lambda x: x["gender"],
                "location": lambda x: x["location"],
                "chat_history": lambda _: self.memory.chat_memory.messages
            })
            | chat_prompt
            | self.llm
            | StrOutputParser()
        )

    def get_response(self, user_input, age, gender, location):
        try:
            inputs = {
                "user_input": user_input,
                "age": age,
                "gender": gender,
                "location": location
            }
            response = self.chain.invoke(inputs)

            
            self.memory.chat_memory.add_user_message(user_input)
            self.memory.chat_memory.add_ai_message(response)

            return response
        except Exception as e:
            return f"⚠️ Error: {e}"
