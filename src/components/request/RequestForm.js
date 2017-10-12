import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';


const RequestForm = ({ request, allBloods, onChange, onSave, loading, staticLists, errors }) => {
  return (
    <form className="container">

      <h2>Medicine Request Form</h2>

      <TextInput
        name="title"
        label="Title"
        value={request.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="author"
        label="Author"
        value={request.author}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="donor"
        label="Donor Name"
        rows={6}
        value={request.donor}
        onChange={onChange}
        error={errors.donor}
      />

      <TextInput
        name="location"
        label="Location"
        rows={6}
        value={request.location}
        onChange={onChange}
        error={errors.location}
      />



      <input type="submit" className="btn btn-primary" value="Post Request" onClick={onSave}/>
    </form>
  )
}

export default RequestForm;
