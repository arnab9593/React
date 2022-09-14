
import { useState, useEffect } from 'react';
import { useRef } from 'react';

const userData = JSON.parse(localStorage.getItem("formSubData")) || [];

const Userform = () => {
    const inputRef = useRef(null);
    const [formData, setformData] = useState(userData)
    const [text, setText] = useState({
        name: "",
        email: "",
        gender: "",
        role: "",
        maritialStatus: false,
        id: Date.now()
    });

    useEffect(() => {
        localStorage.setItem("formSubData", JSON.stringify(formData));
    }, [formData]);

    const handelForm = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setText({ ...text, [name]: newValue });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        setformData([...formData, text]);
        setText({
            name: "",
            email: "",
            gender: "",
            role: "",
            maritialStatus: false,
        });
        inputRef.current.focus();
    };
    console.log(formData);

    return (
        <>
            <h3>React Developer Meetup Form</h3>
            <div className='formDiv'>
                <form onSubmit={formSubmit}>
                    <level> Enter Name : </level>
                    <input type='text' name='name' value={text.name} onChange={handelForm} placeholder='Enter Your Name' ref={inputRef}></input> <br></br>
                    <level> Enter Email : </level>
                    <input type='email' name='email' value={text.email} onChange={handelForm} placeholder='Enter Your Email'></input> <br></br>
                    <level> Select Gender : </level>
                    <select value={text.gender} onChange={handelForm} name='gender'>
                        <option value=''>Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select><br></br>
                    <level> Select Role : </level>
                    <select value={text.role} onChange={handelForm} name='role'>
                        <option value=''>Select Role</option>
                        <option value='SDE-E3'>SDE-E3</option>
                        <option value='SDE-E4'>SDE-E4</option>
                        <option value='SDE-E5'>SDE-E5</option>
                        <option value='SDE-E6'>SDE-E6</option>
                        <option value='SDE-E7'>SDE-E7</option>
                        <option value='SDE-E8+'>SDE-E8+</option>
                    </select> <br></br>
                    <level> Married : </level>
                    <input value={text.maritialStatus} onChange={handelForm} type='checkbox' name='maritialStatus' ></input> <br></br>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
            <div>
                {formData.map((items) => (
                    <li key={items.email}>
                        {items.name} <br></br>
                        {items.email}
                    </li>
                ))}
            </div>

        </>
    )

}

export default Userform;