import { DatePicker, LocalizationProvider, DatePickerDay, PickersDay } from '@mui/x-date-pickers';
import 'dayjs/locale/ko';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const CustomDatePicker_mui = ({ name, labelName, propState, changeState, dateType, compState , disabled}) => {
	useEffect(() => {
		// propState가 변경될 때마다 selectedDate 업데이트
	}, [propState]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
			<DatePicker
				disabled = {disabled}
				value={propState === '' || propState === null ? null : dayjs(propState)}
				onChange={(newDate) => {
					const event = {
						target: {
							name: name,
							value: Date.parse(newDate),
						},
					};
					changeState(event);
				}}
				sx={{
					width: '100%',
					// width: '1230px',
				}}
				slotProps={{
					textField: {
						variant: 'standard',
					},
					day: {
						sx: {
							'&.MuiPickersDay-root': {
								'&.Mui-selected': {
									backgroundColor: '#1c90fb',
									'&:hover': {
										backgroundColor: '#293846',
									},
								},
							},
						},
					},
				}}
				// disableFuture
				format="YYYY/MM/DD"
				label={labelName}
				// shouldDisableDate={(day) => {
				// 	if (dateType === 'start') {
				// 		// 시작일인 경우, compState 이후의 날짜를 비활성화
				// 		return dayjs(day).isAfter(dayjs(compState), 'YYYY/MM/DD');
				// 	} else if (dateType === 'end') {
				// 		// 종료일인 경우, compState 이전의 날짜를 비활성화
				// 		return dayjs(day).isBefore(dayjs(compState), 'YYYY/MM/DD');
				// 	}
				// 	// 그 외의 경우는 비활성화하지 않음
				// 	return false;
				// }}
			/>
		</LocalizationProvider>
	);
};

export default CustomDatePicker_mui;
