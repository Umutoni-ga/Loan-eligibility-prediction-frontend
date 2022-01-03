import React, { useRef, useState } from 'react';
import classes from './ApplicantForm.module.css';
import { Modal} from 'antd';


const  ApplicantForm = () =>{

  const [isModalVisible, setIsModalVisible] = useState(false);

    const [prediction, setState]=useState('');
    const [content, setContent]=useState('');
    //let content='';
    
    const genderRef=useRef();
    const marriedRef=useRef();
    const dependentsRef=useRef();
    const educationRef=useRef();
    const employedRef=useRef();
    const applicantIncomeRef=useRef();
    const coapplicantIncomeRef=useRef();
    const loanAmountRef=useRef();
    const termRef=useRef();
    const creditRef=useRef();
    const areaRef=useRef();

    function submitHandler(event){
        event.preventDefault();
        setContent('');

        const inputGender=genderRef.current.value;
        const inputMarried=marriedRef.current.value;
        const inputDependents=dependentsRef.current.value;
        const inputEducation=educationRef.current.value;
        const inputEmployed=employedRef.current.value;
        const inputApplicantIncome=applicantIncomeRef.current.value;
        const inputCoapplicantIncome=coapplicantIncomeRef.current.value;
        const inputLoanAmount=loanAmountRef.current.value;
        const inputTerm=termRef.current.value;
        const inputCredit=creditRef.current.value;
        const inputArea=areaRef.current.value;

        const applicantData= {
            Gender: inputGender,
            Married: inputMarried,
            Dependents: inputDependents,
            Education: inputEducation,
            Self_Employed: inputEmployed,
            ApplicantIncome: inputApplicantIncome,
            CoapplicantIncome: inputCoapplicantIncome,
            LoanAmount: inputLoanAmount,
            Loan_Amount_Term: inputTerm,
            Credit_History: inputCredit,
            Property_Area: inputArea,
        }

        console.log(applicantData);

        fetch('http://127.0.0.1:8000/prediction/', 
        {
            method: 'POST',
            body: JSON.stringify(applicantData),
            headers: {
                'content-type':'application/json'
            }
        }).then((resp)=> resp.json())
        .then((respj)=> setState(respj.prediction))

        console.log(prediction[2]);

        if (prediction[2]==="N") {
            setContent('You are not eligible for the loan you are requesting.');
        }
        else if (prediction[2]==="Y") {
            setContent('You are eligible for this loan.');
        }

        console.log(content);
    }

    const showModal = () => {
        setIsModalVisible(true);
        console.log("clicked")
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return(
     <React.Fragment>
      <>
      <Modal title="Prediction Result" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
       footer={null}
       width={700}
      >
      <p className={classes.Message}><strong>{content}</strong></p>
     <button className={classes.modalBtn}
     onClick={ handleCancel}
     >Close</button>
      </Modal>
      </>
      <div >
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='gender'> Gender: </label>
                <select id='gender' name='gender' required ref={genderRef}>
                    <option value='none' defaultValue hidden>-- Select gender --</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="married"> Marital status: </label>
                <select id='married' name='married' required ref={marriedRef}>
                    <option value='none' defaultValue hidden>-- Marital status --</option>
                    <option value='married'>Married</option>
                    <option value='single'>Single</option>
                </select> 
            </div>
            <div className={classes.control}>
                <label htmlFor="dependents">Dependents:</label>
                <input type='number' id='dependents' required ref={dependentsRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='education'>Education:</label>
                <select id='education' name='education' required ref={educationRef} >
                    <option value='none' defaultValue hidden>-- Select education level --</option>
                    <option value='graduate'>Graduate</option>
                    <option value='not graduate'>Not graduate</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="employed">Self Employed:</label>
                <select id='employed' name='employed' required ref={employedRef}>
                    <option value='none' defaultValue hidden>Self Employed?</option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select> 
            </div>
            <div className={classes.control}>
                <label htmlFor="applicantIncome">Applicant Income:</label>
                <input type='number' id='applicantIncome' required ref={applicantIncomeRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="coapplicantIncome">Coapplicant Income:</label>
                <input type='number' id='coapplicantIncome' required ref={coapplicantIncomeRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="loanAmount">Loan Amount:</label>
                <input type='number' id='loanAmount' required ref={loanAmountRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="term">Loan Amount Term:</label>
                <input type='number' id='term' required ref={termRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="credit">Credit History:</label>
                <input type='number' id='credit' required ref={creditRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="area">Property Area:</label>
                <select id='area' name='area' required ref={areaRef}>
                    <option value='none' defaultValue hidden>-- Select property area --</option>
                    <option value='urban'>Urban</option>
                    <option value='semiurban'>Semi-urban</option>
                    <option value='rural'>Rural</option>
                </select> 
            </div>
            <div className={classes.actions}>
                <button  onClick={showModal}>Predict</button>
            </div>
        </form>
        <div className={classes.divfont}> {content} </div>
    </div>
    </React.Fragment>
    )
     
}

export default ApplicantForm;