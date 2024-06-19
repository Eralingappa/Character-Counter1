import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }
  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }
  onAddUserInput = event => {
    event.preventDefault()

    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnterText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }
  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }
  render() {
    const {userInput} = this.state
    return (
      <div>
        <div>
          <div>
            <h1>
              Count the Characters like a <br /> Boss
            </h1>
          </div>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </div>
        <div>
          <h1> Characters Counter </h1>
          <div onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter  the characters here"
            />
            <button>Add</button>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
