from app import create_app, db
from models import Question
import random

def add_sample_questions():
    app = create_app()
    with app.app_context():
        # Clear existing questions
        Question.query.delete()

        # List of sample questions
        questions = [
            {
                "text": "What is 5 + 7?",
                "answer": 12,
                "difficulty": "easy"
            },
            {
                "text": "What is 8 x 9?",
                "answer": 72,
                "difficulty": "medium"
            },
            {
                "text": "What is 15 - 6?",
                "answer": 9,
                "difficulty": "easy"
            },
            {
                "text": "What is 24 ÷ 3?",
                "answer": 8,
                "difficulty": "medium"
            },
            {
                "text": "What is the square root of 144?",
                "answer": 12,
                "difficulty": "hard"
            },
            {
                "text": "What is 3² + 4²?",
                "answer": 25,
                "difficulty": "hard"
            },
            {
                "text": "What is 17 + 28?",
                "answer": 45,
                "difficulty": "medium"
            },
            {
                "text": "What is 50% of 80?",
                "answer": 40,
                "difficulty": "medium"
            },
            {
                "text": "What is 7 x 13?",
                "answer": 91,
                "difficulty": "hard"
            },
            {
                "text": "What is 100 - 45?",
                "answer": 55,
                "difficulty": "easy"
            }
        ]

        # Add questions to the database
        for q in questions:
            new_question = Question(text=q['text'], answer=q['answer'], difficulty=q['difficulty'])
            db.session.add(new_question)

        # Commit the changes
        db.session.commit()

        print(f"Added {len(questions)} sample questions to the database.")

if __name__ == "__main__":
    add_sample_questions()
