
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";
import { Controller, Field, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
// import { AppEvent } from "../../../app/types/event";
// import { createId } from "@paralleldrive/cuid2";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


export default function EventForm() {

    const {register, handleSubmit, control,setValue, formState:{errors, isValid, isSubmitting}} = useForm({
        mode: 'onBlur',
    });
    let {id} = useParams();
    const event = useAppSelector(state => state.events.events.find(e => e.id === id));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();




    function onSubmit(data: FieldValues){
        // console.log(data);
        
        id = id ?? createId();
    
        event 
        ? dispatch(updateEvent({...event, ...data, date: data.date.toString()}))
        : dispatch(createEvent({...data, id, hostedBy: 'Bob', hostPhotoURL:'', attendees: [], date: data.date.toString()}));
        navigate(`/events/${id}`);

        
    }


  return (
    <Segment clearing>
        <Header content='Event details' sub color="teal" />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
                placeholder='Event Title' 
                defaultValue={event?.title || ''}
                {...register('title', {required: 'Title is required'})}
                error={errors.title && errors.title.message}
            />
            <Controller
                name="category"
                control={control}
                rules={{required: 'Category is required'}}
                defaultValue={event?.category || ''}
                render={({field}) => (
                    <Form.Select
                        options={categoryOptions}
                        placeholder='Category' 
                        clearable
                        {...field}
                        onChange={(_, data) => setValue('category', data.value, {shouldValidate: true})}
                        error={errors.category && errors.category.message}
                    />
                )}
            />
            {/* <Form.Select
                options={categoryOptions}
                placeholder='Category' 
                defaultValue={event?.category || ''}
                {...register('category', {required: 'Category is required'})}
                error={errors.category && errors.category.message}
            /> */}


            <Form.TextArea
                placeholder='Description' 
                defaultValue={event?.description || ''}
                {...register('description', {required: 'Description is required'})}
                error={errors.description && errors.description.message}
            />

            <Header content='Location Details' sub color="teal" />

            <Form.Input
                placeholder='City' 
                defaultValue={event?.city || ''}
                {...register('city', {required: 'City is required'})}
                error={errors.city && errors.city.message}
            />

            <Form.Input
                placeholder='Venue' 
                defaultValue={event?.venue || ''}
                {...register('venue', {required: 'Venue is required'})}
                error={errors.venue && errors.venue.message}
            />

            <Form.Field>
                <Controller
                    name="date"
                    control={control}
                    rules={{required: 'Date is required'}}
                    defaultValue={event && new Date(event.date) || null}
                    render={({field}) => (
                        <DatePicker
                            onChange={value => setValue('date', value, {shouldValidate: true})}
                            selected={field.value}
                            showTimeSelect
                            placeholderText='Event Date and Time'
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm aa'
                        />
                    )}
                />
            </Form.Field>
            

            
            

            <Button 
            loading={isSubmitting}
            disabled={!isValid} 
            type='submit' 
            floated='right' 
            positive content='Submit' />

            <Button  disabled={isSubmitting} as={Link} to ='/events' type='button' floated='right' content='Cancel' />
        </Form>
    </Segment>
  )
}
