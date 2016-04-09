'use strict'

function compare(input1, input2)
{
	var result = []

	if(input1)
	{
		for(var i=0; i<input1.length; i++)
		{
			var item = input1[i]

			if(input2.indexOf(item) == -1)
			{
				result.push(item)
			}
		}
	}

	return result
}

module.exports = {compare: compare}