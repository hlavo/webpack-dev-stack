module.exports = function (plop) {

	plop.setGenerator('component', {
		description: 'this is React function',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'What is the component name?',
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'name is required';
			}
		}],
		actions: [{
			type: 'add',
			path: 'src/scripts/views/components/{{camelCase name}}/{{camelCase name}}.jsx',
			templateFile: './dev/templates/component.jsx'
		},{
			type: 'add',
			path: 'src/scripts/views/components/{{camelCase name}}/{{camelCase name}}.scss',
			templateFile: './dev/templates/component.scss'
		}]
	});

	plop.setGenerator('container', {
		description: 'this is a React Class',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'What is the container name?',
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'name is required';
			}
		}],
		actions: [{
			type: 'add',
			path: 'src/scripts/views/containers/{{camelCase name}}/{{camelCase name}}.jsx',
			templateFile: './dev/templates/container.jsx'
		},{
			type: 'add',
			path: 'src/scripts/views/containers/{{camelCase name}}/{{camelCase name}}.scss',
			templateFile: './dev/templates/component.scss'
		}]
	});
};