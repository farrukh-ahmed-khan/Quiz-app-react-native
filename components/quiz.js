import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
const Quiz = () => {
	const questions = [
		{
			questionText: 'What is the capital of Pakistan?',
			answerOptions: [
				{ answerText: 'Karachi', isCorrect: false },
				{ answerText: 'Lahore', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
				{ answerText: 'Peshawar', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#206EA9'
			}}
		>
			{showScore ? (
				<View>
					<Image source={require('C:/Users/Hp/Desktop/form-native/Form/components/image/logo.png')}
						style={{
							width: 180,
							height: 180,
							marginHorizontal: 130
						}}
					/>
					<Text
						style={{
							fontSize: 60,
							backgroundColor: '#206EA9',
							color: 'white',
							textAlign: 'center',
							alignContent: 'center',
							fontStyle: 'italic',
							fontWeight: 'bold',
							marginVertical: 80
						}}
					>
						You scored {score} out of {questions.length}

					</Text>
					<Text
						style={{
							fontSize: 20,
							backgroundColor: '#206EA9',
							color: 'white',
							textAlign: 'center',
							alignContent: 'center',
							fontStyle: 'italic',
							fontWeight: 'bold',
							marginVertical: 80
						}}
					>
						Thanks for playing!
					</Text>
				</View>
			) : (
				<View>
					<Image source={require('C:/Users/Hp/Desktop/form-native/Form/components/image/logo.png')}
						style={{
							width: 180,
							height: 180,
							marginHorizontal: 130
						}}
					/>
					<View>
						<View >
							<Text
								style={{
									backgroundColor: '#206EA9',
									color: 'white',
									fontSize: 20,
									textAlign: 'center',
									fontStyle: 'italic'
								}}
							>Question {currentQuestion + 1}/{questions.length}</Text>
						</View>
						<Text
							style={{
								fontSize: 40,
								backgroundColor: '#206EA9',
								color: 'white',
								textAlign: 'center',
								alignContent: 'center',
								fontStyle: 'italic',
								fontWeight: 'bold'
							}}
						>{questions[currentQuestion].questionText}</Text>
					</View>
					<Text
						style={{
							textAlign: 'center'
						}}
					>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<TouchableOpacity><Text onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
								style={{
									marginHorizontal: 10,
									marginVertical: 10,
									backgroundColor: 'white',
									padding: 20,
									width: 300,
									borderRadius: 10,
									textAlign: 'center',
									color: '#206EA9',
									fontSize: 20,
									fontWeight: '900',
								}}
							>{answerOption.answerText}</Text></TouchableOpacity>
						))}
					</Text>
				</View>
			)}
		</View>
	)
}
export default Quiz