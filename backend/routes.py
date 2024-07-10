from flask import Blueprint, jsonify, request
from models import db, Question, User

main = Blueprint('main', __name__)

@main.route('/questions', methods=['GET'])
def get_questions():
    questions = Question.query.all()
    return jsonify([{
        'id': q.id,
        'text': q.text,
        'difficulty': q.difficulty
    } for q in questions])

@main.route('/submit_answer', methods=['POST'])
def submit_answer():
    data = request.json
    question = Question.query.get(data['question_id'])
    if question.answer == data['answer']:
        return jsonify({'correct': True})
    return jsonify({'correct': False})

@main.route('/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201
