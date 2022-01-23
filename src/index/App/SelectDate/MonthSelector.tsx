import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
	monthName: string;
	changeMonth: (month: string) => void;
};

const monthAbrevs: { [key: string]: string } = {
	January: 'Jan',
	Febuary: 'Feb',
	March: 'Mar',
	April: 'Apr',
	May: 'May',
	June: 'June',
	July: 'July',
	August: 'Aug',
	September: 'Sept',
	October: 'Oct',
	November: 'Nov',
	December: 'Dec',
};

const Month = (props: Props) => {
	const monthName = props.monthName;
	const [year, setYear] = useState();

	return (
		<Button
			onClick={() => props.changeMonth(monthName)}
			variant={'unstyled'}
			borderRadius={0}
			border={'1px'}
		>
			{monthAbrevs[monthName]}
		</Button>
	);
};

export { Month };
