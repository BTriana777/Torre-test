import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';
import { useFetch } from '../../hook/useFetch';
import { SkillScreen } from '../SkillScreen';

export const UserScreen = () => {

    const [skillActived, setSkillActived] = useState(false);
    const [skillName, setSkillName] = useState("");
    const [searchActived, setSearchActived] = useState(false);
    const [userChange, setUserChange] = useState('trianab659');
    const [inputSearch, setInputSearch] = useState('');

    let expertLength = 0;
    let proficientLength = 0;
    let noviceLength = 0;
    let experienceLength = 0;

    const {data, loading} = useFetch(`https://bio.torre.co/api/bios/${userChange}`);
    
    const handleClickSkill = ({target}) => {
        setSkillName(target.innerHTML);
        setSkillActived(true);
    }
    const handleCloseSkill = () => {
        setSkillActived(false);
    }
    const handleClickUser = () => {
        setSearchActived(!searchActived);
    }
    const handleInputChange = ({target}) => {
        setInputSearch(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserChange(inputSearch);
        setSearchActived(!searchActived);
    }
    
    if(loading){
        return(
            <h1 className='user_wait'>wait...</h1>
        )
    }
    for (let i = 0; i < data.strengths.length; i++) {
        if(data.strengths[i].proficiency === 'expert'){
            expertLength += 1;
        } else if(data.strengths[i].proficiency === 'proficient'){
            proficientLength += 1;
        } else if(data.strengths[i].proficiency === 'novice'){
            noviceLength += 1;
        }else if(data.strengths[i].proficiency === 'no-experience-interested'){
            experienceLength += 1;
        }
    }
    return (
        <>
            <div className='user__container'>
                <div className='user__search-container' style={ searchActived? {display: 'flex'}:{display: 'none'}}>
                    <form>
                        <input
                            onSubmit={handleSubmit}
                            type='text'
                            placeholder=' User'
                            autoComplete='false'
                            name='search'
                            value={inputSearch}
                            onChange={handleInputChange}
                        />
                    </form>
                    <FaSearch size='30' color='#A9A9AB' cursor='pointer' onClick={handleSubmit}/>
                </div>
                {
                    searchActived &&
                    <div className='user__blur'></div>
                }
                <div className='user__header-container'>
                    <div className='user__container-icons-text'>
                    <FaBars size='22' color='#A9A9AB' cursor='pointer'/>
                    <h2 className='user__title'>torre<span>.co</span></h2>
                    </div>

                    <div className='user__container-icons-text'>
                    <FaSearch size='22' color='#A9A9AB' cursor='pointer' onClick={handleClickUser}/>
                    <h2 className='user__sign-in'>SIGN IN</h2>
                    </div>
                </div>
                <div className='user__photo-name-container'>
                    <div className='user__photo' style={{backgroundImage: `url(${data?.person.picture})`}}></div>
                    <h2>{data?.person.name}</h2>
                </div>
                <div className='user__skills-container'>
                    <p>Skills and interests:</p>
                    <div >
                        {
                            expertLength > 0 &&
                            <div className="user__each-type-container">
                                <div className='user__icon-text'>
                                    <span className='user__icon-skill'><svg viewBox="0 0 24 25"><path d="M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9A1,1 0 0,1 3,8A1,1 0 0,1 4,7H7V9H4M5,5A1,1 0 0,1 4,4A1,1 0 0,1 5,3H10V5H5M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H7V13H3Z"></path></svg></span>
                                    <p>Expert</p>
                                </div>
                                <div className='user__type-of-skill-container'>
                                    {
                                        
                                            data.strengths.filter( skill => skill.proficiency === 'expert').map(skill => {
                                                return (
                                                    <p key={skill.id} className='user__skill' onClick={handleClickSkill}>{skill.name}</p>
                                                )
                                            })    
                                        
                                    }
                                </div>
                            </div>
                        }
                        {
                            proficientLength > 0 &&
                            <div className="user__each-type-container">
                                <div className='user__icon-text'>
                                    <span className='user__icon-skill'><svg viewBox="0 0 24 25"><path d="M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z"></path></svg></span>
                                    <p>Proficient</p>
                                </div>
                                <div className='user__type-of-skill-container'>
                                    {
                                        data?.strengths.filter( skill => skill.proficiency === 'proficient').map(skill => {
                                            return (
                                                <p key={skill.id} className='user__skill' onClick={handleClickSkill}>{skill.name}</p>
                                            )
                                        })    
                                    
                                    }
                                </div>
                            </div>
                        }
                        {
                            noviceLength > 0 &&
                            <div className="user__each-type-container">
                                <div className='user__icon-text'>
                                    <span className='user__icon-skill'><svg viewBox="0 0 24 25"><path d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"></path></svg></span>
                                    <p>Novice</p>
                                </div>
                                <div className='user__type-of-skill-container'>
                                    {
                                        data?.strengths.filter( skill => skill.proficiency === 'novice').map(skill => {
                                            return (
                                                <p key={skill.id} className='user__skill' onClick={handleClickSkill}>{skill.name}</p>
                                            )
                                        })    
                                    
                                    }
                                </div>
                            </div>
                        }
                        {
                            experienceLength > 0 &&
                            <div className="user__each-type-container">
                                <div className='user__icon-text'>
                                    <span className='user__icon-skill'><svg viewBox="0 0 24 25"><path d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M4.5,20A1.5,1.5 0 0,1 3,18.5A1.5,1.5 0 0,1 4.5,17H11.5A1.5,1.5 0 0,1 13,18.5A1.5,1.5 0 0,1 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z"></path></svg></span>
                                    <p>No experience, but interested</p>
                                </div>
                                <div className='user__type-of-skill-container'>
                                    {
                                        data?.strengths.filter( skill => skill.proficiency === 'no-experience-interested').map(skill => {
                                            return (
                                                <p key={skill.id} className='user__skill' onClick={handleClickSkill}>{skill.name}</p>
                                            )
                                        })    
                                    
                                    }
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
            {
                skillActived &&
                <SkillScreen name={skillName} data={data} handleCloseSkill={handleCloseSkill}/>
                
            }
        </>

    )
}
