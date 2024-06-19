import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <li>
      <p>
        {userEnteredText}:{textLength}
      </p>
    </li>
  )
}
export default UserInput
