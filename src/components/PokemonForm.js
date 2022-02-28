import {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });
  //set state for entered from data such that it can be rendered instantly upon submission and deconstruct formData

function handleChange(event) {
  setFormData({
    ...formData,
    [event.target.name]:event.target.value,
  });
}
// create event handler for form change using form state function and spread syntax including original form data and changed values i.e TELLS FORM WHAT TO DO WITH SUBMITTED VALUES FOR USE IN STATE
 
function handleSubmit() {

  const newPokemon = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl
    },
  }
//create submit handler to package new additions from the form and send to the sever for backend persistence
 fetch('http://localhost:3001/pokemon', {
   method: "POST",
   headers: {
     "Content-Type":"application/json",
   },
   body: JSON.stringify(newPokemon),
 })
 .then((r) => r.json())
 .then(onAddPokemon);
}
//add new pokemon to state 

return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit= {handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value ={formData.name} onChange ={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value ={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value= {formData.frontUrl}
            onChange = {handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value= {formData.backUrl}
            onChange= {handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;