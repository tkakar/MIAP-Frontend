import {scoreColors, dmeColors, scoreBorderColors} from './constants';

export const generateColor = (score, scoreRange) => {
	if (score <= scoreRange[0]) {
		return scoreColors[0].color;
	} 
	else if (score > scoreRange[0] && score <= scoreRange[1]) {
		return scoreColors[1].color;
	}
	else if (score > scoreRange[1] && score <= scoreRange[2]) {
		return scoreColors[2].color;
	}
	else if (score > scoreRange[2]) {
		return scoreColors[3].color;
	}
}

export const generateScoreBorderColor = (score, scoreRange) => {
	if (score <= scoreRange[0]) {
		return scoreBorderColors[0].color;
	} 
	else if (score > scoreRange[0] && score <= scoreRange[1]) {
		return scoreBorderColors[1].color;
	}
	else if (score > scoreRange[1] && score <= scoreRange[2]) {
		return scoreBorderColors[2].color;
	}
	else if (score > scoreRange[2]) {
		return scoreBorderColors[3].color;
	}
}

export const getStyleByDMECount = (numDMEs, dmeRange) => {
	var style = {
		padding: '20px 0',
		margin: 0,
		color: 'white'
	};
	
	if(numDMEs === 0) {
		style['background'] = dmeColors[0].color;
	}else if(numDMEs <= dmeRange[0]) {
		style['background'] = dmeColors[1].color;
	}
	else if(numDMEs <= dmeRange[1]) {
		style['background'] = dmeColors[2].color;
	}
	else if(numDMEs <= dmeRange[2]) {
		style['background'] = dmeColors[3].color;
	}
	else {
		style['background'] = dmeColors[4].color;
	}

	return style;
}