import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	IconButton,
	Input,
	useOutsideClick,
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';

type Props = {
	year: number;
	changeYear: (year: number) => void;
};

const YearSelector = (props: Props) => {
	const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
	const { year, changeYear } = props;
	const [isClicked, setIsClicked] = useState(false);
	useOutsideClick({
		ref: ref,
		handler: () => setIsClicked(false),
	});

	const handleChange = (e: ChangeEvent<{ value: string }>) => {
		const val = e.target.value;
		if (val.length < 4) {
			return;
		} else {
			changeYear(parseInt(e.target.value));
		}
	};

	return (
		<Flex m={'auto'} w={'70%'} justify={'space-between'}>
			<IconButton
				variant='ghost'
				aria-label='Go Back 1 Year'
				icon={<ChevronLeftIcon />}
				onClick={() => props.changeYear(props.year - 1)}
			></IconButton>
			<Box ref={ref} onClick={() => setIsClicked(true)}>
				{isClicked ? (
					<Input
						variant={'flushed'}
						textAlign={'center'}
						onChange={handleChange}
					/>
				) : (
					<Input
						variant={'flushed'}
						textAlign={'center'}
						value={props.year}
						readOnly={true}
					/>
				)}
			</Box>
			<IconButton
				variant='ghost'
				aria-label='Go Forward 1 Year'
				icon={<ChevronRightIcon />}
				onClick={() => props.changeYear(props.year + 1)}
			></IconButton>
		</Flex>
	);
};

export { YearSelector };
