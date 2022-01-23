import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import CalanderContainer from './App/CalanderContainer';
import { SelectDate } from './App/SelectDate';
import { months } from './shared/months';

type Props = {};

const App = (props: Props) => {
	const date = new Date();

	const [month, setMonth] = useState(months[date.getMonth()]);
	const [year, setYear] = useState(date.getFullYear());
	const [selectedDate, setDate] = useState(date);

	return (
		<>
			<Flex h={'70px'}>
				<SelectDate
					year={year}
					months={months}
					changeYear={setYear}
					changeMonth={setMonth}
				/>
				<Box fontSize={25} mt={2} p={2}>
					{month}
				</Box>
				<Box fontSize={25} mt={2} p={2}>
					{year}
				</Box>
				<Box fontSize={25} mt={2} pt={2} pl={10}>
					{selectedDate.toDateString()}
				</Box>
			</Flex>
			<Flex basis={'fit-content'} maxW={'99%'} h={'95vh'} m={'auto'}>
				<Box flex={1} border={'1px'}>
					Small Calander Selector
				</Box>
				<Box w={'90vw'} maxH={'80vw'} border={'1px'}>
					<Flex mt={4} gap={'4vw'} justify={'space-evenly'}>
						<Box>Sunday</Box>
						<Box>Monday</Box>
						<Box>Tuesday</Box>
						<Box>Wednesday</Box>
						<Box>Thursday</Box>
						<Box>Friday</Box>
						<Box>Saturday</Box>
					</Flex>
					<CalanderContainer
						changeDate={setDate}
						month={month}
						year={year}
					/>
				</Box>
			</Flex>
		</>
	);
};

export default App;
