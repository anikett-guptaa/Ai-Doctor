# main.py

from text_model.chatbot import AIDoctorChatbot
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    print("⚠️ OPENAI_API_KEY not found in .env file.")
    exit()


print("🩺 Welcome to AI Doctor\n")
age = input(" Enter your age: ")
gender = input(" Enter your gender: ")
location = input("🌍 Enter your country or region: ")


chatbot = AIDoctorChatbot(api_key)

print("\n Chat started! (type 'exit' to stop)\n")

while True:
    user_input = input("You: ")
    if user_input.lower() in ["exit", "quit"]:
        print("AI Doctor: Take care! 👋")
        break

    response = chatbot.get_response(user_input, age, gender, location)
    print("AI Doctor:", response)
