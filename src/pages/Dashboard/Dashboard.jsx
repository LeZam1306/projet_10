import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router'
import { useUserInfo } from '../../hooks/useUserInfo'
import useFetch from '../../hooks/useFetch'
import Button from '../../components/Dashboard/Button/Button'
import Balance from '../../components/Dashboard/Balance/Balance'
import './Dashboard.scss'

const Dashboard = () => {
    const { data, error } = useFetch({url: "./exampleOfABankAccount.json"})
    const { userName, lastName, firstName, status } = useUserInfo()
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem("token") != null){
            setToken(localStorage.getItem("token"))
        }else{
            navigate("/sign-in")
        }
    }, [])

    useEffect(() => {
        if(token != ""){
            dispatch(getUser(token))
        }
    }, [token])

    useEffect(() => {
        if (status === undefined || status === null) return
        if(status != 200){
            navigate("/sign-in")
        }
    }, [status])

    if(error.status){
        return <div>Une ereur au chargement des données est survenu</div>
    }
    return <section className="dashboard">
        <div className='dashboard__header'>
            <h1 className='dashboard__header--title'>Welcome back<br/>{userName}</h1>
            <Button type='button'>Edit Name</Button>
        </div>
        {data ? data.account.map((item, index) => {
            return <Balance 
                key={index}
                content={{
                    title: item.title,
                    amount: item.amount,
                    balanceType: item.balanceType
                }}
            />
        }) : <div>Chargement</div>}
    </section>
}

export default Dashboard