import React from 'react'
const currencyData = [
	{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
	{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
	{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
	{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
	{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]
export default class CurrencyConverter extends React.Component{
    state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
    }
    handleAmountIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount + 1
			}
		})
	}
    handleAmountDecrease = () => {
		return (
			this.state.amount > 0 &&
			this.setState((prevState) => {
				return {
					amount: prevState.amount - 1
				}
			})
		)
	}
    handleOptionSelect = (e) => {
        this.setState({
            selectedCurrency: e.target.value,
            currencyChosen: e.target.value === 'Select Currency' ? false: true
        })
    }
    render(){
    let currency = currencyData.map((el,i) => (
        <option value={i} key={el.id}>
            {el.name}
        </option>
    ))
        return(
            <div>
                <select onChange={e => this.handleOptionSelect(e)} value={this.state.selectedCurrency} name="" id="">
                    <option value="Select Currency">Select Currency</option>
                    {currency}
                </select>
                <div>
                    <button onClick={this.handleAmountIncrease} className='add'>+</button>
                    <button onClick={this.handleAmountDecrease} className='minus'>-</button>
                </div>
                {this.state.currencyChosen ? this.props.render(currencyData[this.state.selectedCurrency],this.state.amount): (<p>Please Select Currency</p>)}
            </div>
        )
    }
}