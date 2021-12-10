import React, { useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export const SkillScreen = ({name, data, handleCloseSkill}) => {

    const refData = useRef([]);
    refData.current = data.strengths.filter( skill => skill.name === name)
    const {proficiency, recommendations} = refData.current[0]
    const type = proficiency;
    const iconSkill = {
        expert: '<span className="skill__icon-skill"><svg viewBox="0 0 24 25"><path d="M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9A1,1 0 0,1 3,8A1,1 0 0,1 4,7H7V9H4M5,5A1,1 0 0,1 4,4A1,1 0 0,1 5,3H10V5H5M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H7V13H3Z"></path></svg></span>',
        proficient: '<span className="skill__icon-skill"><svg viewBox="0 0 24 25"><path d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"></path></svg></span>',
        novice: '<span className="skill__icon-skill"><svg viewBox="0 0 24 25"><path d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"></path></svg></span>',
        noexperience: '<span className="skill__icon-skill"><svg viewBox="0 0 24 25"><path d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M4.5,20A1.5,1.5 0 0,1 3,18.5A1.5,1.5 0 0,1 4.5,17H11.5A1.5,1.5 0 0,1 13,18.5A1.5,1.5 0 0,1 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z"></path></svg></span>' 
    }
    
    const getIconSkill = (type) => {
        switch (type) {
            case 'expert':
                return iconSkill.expert;
            case 'proficient':
                return iconSkill.proficient;
            case 'novice':
                return iconSkill.novice;
            case 'no-experience-interested':
                return iconSkill.noexperience
            default:
                return iconSkill.expert; 

        }
    }

    return (
        <div className='skill__cointainer'>
            <div className='skill__header'>
                <AiOutlineClose size={'30'} color='#E9EAEA' cursor='pointer' onClick={handleCloseSkill}/>
                <h2>{name}</h2>
            </div>
            <div className="skill__proficiency-container">
                {
                    document.querySelector(".skill__img-title")
                    ? 
                    <div className='skill__img-title'>
                        <p>Proficiency: </p>
                        {document.querySelector(".skill__img-title").innerHTML=getIconSkill(type)}
                    </div>
                    :
                    <div className='skill__img-title'>
                        <p>Proficiency: </p>
                        <span className="skill__icon-skill"><svg viewBox="0 0 24 25"><path d="M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9A1,1 0 0,1 3,8A1,1 0 0,1 4,7H7V9H4M5,5A1,1 0 0,1 4,4A1,1 0 0,1 5,3H10V5H5M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H7V13H3Z"></path></svg></span>
                        <p className='skill_p-types'>{type === 'expert'? 'Expert' 
                            :(type === 'proficient')? 'Proficient'
                            :(type === 'novice')? 'Novice'
                            :(type === 'no-experience-interested') && 'No experience, but interested'
                        }</p>
                    </div>
                }
                    <p>Recommendations:  {recommendations}</p>
            </div>
        </div>
    )
}
