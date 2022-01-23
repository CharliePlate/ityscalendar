import { Box, useOutsideClick } from '@chakra-ui/react';
import React, { useState } from 'react';
import { daysInMonth, months } from '../../shared/months';

type Props = {
	day: Date;
	changeDate: (date: Date) => void;
	month: string;
};

let CalanderDay = (props: Props) => {
	const [isClicked, setIsClicked] = useState(false);
	const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

	useOutsideClick({
		ref: ref,
		handler: () => setIsClicked(false),
	});
	return (
		<Box
			border={'1px'}
			h={'14vh'}
			textAlign={'right'}
			pt={1}
			pr={2}
			onClick={() => {
				setIsClicked(true);
				props.changeDate(props.day);
			}}
			bg={
				isClicked
					? 'green.300'
					: props.day.getMonth() === months.indexOf(props.month)
					? 'gray.600'
					: 'gray.900'
			}
		>
			{props.day.getDate()}
		</Box>
	);
};

export { CalanderDay };
