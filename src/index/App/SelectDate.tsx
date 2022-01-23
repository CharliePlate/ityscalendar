import {
	Button,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';

import { months } from '../shared/months';
import { Month } from './SelectDate/MonthSelector';
import { YearSelector } from './SelectDate/YearSelector';

type Props = {
	changeMonth: (month: string) => void;
	changeYear: (year: number) => void;
	months: string[];
	year: number;
};

const SelectDate = (props: Props) => {
	return (
		<Popover>
			<PopoverTrigger>
				<Button mx={6} mt={3}>
					Select Date
				</Button>
			</PopoverTrigger>
			<Portal>
				<PopoverContent bg={'gray.300'} textAlign='center'>
					<PopoverHeader>
						<YearSelector
							year={props.year}
							changeYear={props.changeYear}
						/>
					</PopoverHeader>
					<PopoverBody>
						<SimpleGrid columns={4}>
							{months.map((month) => (
								<Month
									changeMonth={props.changeMonth}
									monthName={month}
									key={month}
								/>
							))}
						</SimpleGrid>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
};

export { SelectDate };
