import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  TextField, FormGroup, Button,
} from '@material-ui/core';
import { getWeatherForFiveDays, getCurrentWeather } from '../actions';

const InputWrapper = ({
  input, ...rest
}) => (
  <TextField id="outlined-basic" label="Название вашего города" variant="outlined" {...rest} {...input} />
);

const Form = ({ handleSubmit, reset }) => {
  const dispatch = useDispatch();
  const requestState = useSelector((state) => state.weatherUI.requestingState);

  const handleSubmitCity = ({ city }) => {
    dispatch(getCurrentWeather(city));
    dispatch(getWeatherForFiveDays(city));
    reset();
  };
  return (
      <form onSubmit={handleSubmit(handleSubmitCity)}>
        <FormGroup style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <Field type="select" name="city" component={InputWrapper} required/> {/* прослушать начало урока чтобы понять почему мы здесь как компонент передаем InputWrapper */}
            <Button type="submit" color="primary" variant="contained" disabled={requestState === 'request'}>
              { requestState === 'request' ? 'Подождите...' : 'Поиск' }
            </Button>
        </FormGroup>
      </form>
  );
};

export default reduxForm({
  form: 'city',
})(Form);
