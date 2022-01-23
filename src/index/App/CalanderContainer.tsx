import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { v4 } from 'uuid';

import {
	buildDateArray,
	getFirstDayOfMonth,
	isLeapYear,
} from '../shared/months';
import { CalanderDay } from './CalanderContainer/CalanderDay';

type Props = {
	month: string;
	year: number;
	changeDate: (date: Date) => void;
};

const CalanderContainer = (props: Props) => {
	const { changeDate, month, year } = props;

	const firstDay = getFirstDayOfMonth(month, year);
	const dateArray = buildDateArray(firstDay, month, isLeapYear(year), year);

	return (
		<>
			<SimpleGrid
				mt={6}
				mb={6}
				mx={'auto'}
				border={'2px'}
				borderColor={'gray.400'}
				w='98%'
				columns={7}
			>
				{dateArray.map((date) => (
					<CalanderDay
						changeDate={changeDate}
						key={v4()}
						day={date}
						month={month}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export default React.memo(CalanderContainer);
