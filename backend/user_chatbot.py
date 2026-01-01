import requests
import json
import numpy as np

conversation_history = [
    # {
    #     "role": "system",
    #     "content": "You are a helpful assistant that provides information about the English Chat Class."
    # }
]

def get_full_response(response=None):
    full_response = ""
    if response is None:
        return "No response provided."
    for line in response.iter_lines():
        if line:
            chunk = json.loads(line)
            if "message" in chunk:
                full_response += chunk["message"]["content"]
    return full_response

def chat_with_bot(user_message):
    global conversation_history

    conversation_history.append({
        "role": "user",
        "content": user_message
    })
    
    response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "llama3",
            "messages": conversation_history 
        }
    )

    assistant_reply = get_full_response(response)
    conversation_history.append({
        "role": "assistant",
        "content": assistant_reply
    })

    return assistant_reply

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        bot_response = chat_with_bot(user_input)
        print("Bot response:", bot_response)