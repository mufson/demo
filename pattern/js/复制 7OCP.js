$(function () {
	
	//问题类型
	var answertype = {
		choice:0,
		input:1
	};
	//问题实体
 	function question(label,answertype,choices){
		return{
			label:label,
			answertype:answertype,
			choices:choices
		};
	}
	
	var view = (function () {
		
		function rederQuestion (target,question) {
			var questionWrapper = document.createElement('div');
			questionWrapper.className = 'question';
			
			var quetionLabel = document.createElement('div');
			quetionLabel.className = 'question-label';
			
			var label = document.createTextNode(question.label);
			quetionLabel.appendChild(label);
			
			var answer = document.createElement('div');
			answer.className = 'question-input';
			
			if (question.answertype == answertype.choice) {
				var input = document.createElement('select');
				var len = question.choices.length;
				
				for (var i = 0; i < len; i++) {
					var option = document.createElement('option');
					option.text = question.choices[i];
					option.value =  question.choices[i];
					input.appendChild(option);
				}
			}else if(question.answertype == answertype.input){
				var input = document.createElement('input');
				input.type = 'text';
			}
			answer.appendChild(input);      
			questionWrapper.appendChild(quetionLabel);
			questionWrapper.appendChild(answer);
			target.appendChild(questionWrapper);
		}
		return{
			render:function(target,questions){
				for (var i = 0; i < questions.length; i++) {
					rederQuestion(target,questions[i]);
				}
			}
		}
	})();
	
	var questions = [question('1aaaabbbbbb?',answertype.choice,['yes','no']),question('ccccdddd?',answertype.input)]
	
	var questionRegion = document.getElementById('question');
	view.render(questionRegion,questions); 
	
 
	/******************************************************/
	
	function questionCreator(spec,my){
		var that = {};
		my = my || {};
		my.label = spec.label;
		
		my.renderInput = function(){
			
			
		}
		
		that.render = function(target){
			var questionWrapper = document.createElement('div');
			questionWrapper.className = 'question';
			var questionLabel = document.createElement('div');
			questionLabel.className = 'question-label';
			var label = document.createTextNode(spec.label);
			questionLabel.appendChild(label);
			var answer = my.renderInput();
			questionWrapper.appendChild(questionLabel);
			questionWrapper.appendChild(answer);
			return questionWrapper;
		}
		return that;
	}
	
	function chioceQuestionCreator(spec) {
		var my = {},
		 that = questionCreator(spec,my);
		 
		 my.renderInput = function () {
		 	var input = document.createElement('select');
		 	var len = spec.choices.length;
		 	for (var i = 0; i < len; i++) {
		 		 var option = document.createElement('option');
		 		 option.text = spec.choices[i];
		 		 option.value = spec.choices[i];
		 		 input.appendChild(option);
		 		 
		 	}
		 	return input;
		 }
		 return that;
	}
	function inputQuestionCreator(spec) {
		var my = {},
		 that = questionCreator(spec,my);
		 
		 my.renderInput = function () {
		 	var input = document.createElement('input'); 
		 	input.type = 'text';      
		 	return input;
		 }
		 return that;
	}
	
	var view = {   
		render: function(target, questions) {
			
		for (var i = 0; i < questions.length; i++) {
			
				target.appendChild(questions[i].render()); 
			
			}   
		}
	};	
	
	var questions = [  
	chioceQuestionCreator({    label: 'Have you used tobacco products within the last 30 days?', choices: ['Yes', 'No']　　}),
	inputQuestionCreator({    label: 'What medications are you currently using?'　　})   
	];
	
	var questionRegion = document.getElementById('questions');
	view.render(questionRegion, questions);
	
 
	/******************************************************/
})