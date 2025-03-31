import Button from '../Button/Button'
import './Balance.scss'

const Balance = ({
    content = {
        title: "no title",
        amount: 3,
        balanceType: "balance type"
    }
}) => {
    return <article className='balance'>
        <div className='balance__content'>
            <h3 className='balance__content--title'>{content.title}</h3>
            <p className='balance__content--amount'>${content.amount}</p>
            <p className='balance__content--balance-type'>{content.balanceType}</p>
        </div>
        <div>
            <Button large={true} type='link'>View transactions</Button>
        </div>
    </article>
}

export default Balance