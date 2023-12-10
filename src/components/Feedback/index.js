import {Component} from 'react'
import './index.css'

// Write your React code here.

class Feedback extends Component {
  state = {feedback: false}

  change = () => {
    this.setState({feedback: true})
    // console.log('clicked')
  }

  render() {
    const {resources} = this.props
    const {feedback} = this.state
    // console.log(resources)
    const {emojis, loveEmojiUrl} = resources
    const feedbackC = (
      <li className="emoji-main-card">
        <h1 className="emoji-heading">
          How satisfied are you with our customer support performance?
        </h1>

        <ul className="emoji-img-card">
          {emojis.map(each => (
            <li key={each.id} className="btn-card">
              <button
                key={each.id}
                onClick={this.change}
                className="btn"
                type="button"
              >
                <img
                  className="emoji-img"
                  key={each.id}
                  src={each.imageUrl}
                  alt={each.name}
                />
              </button>
              <p className="emoji-name">{each.name}</p>
            </li>
          ))}
        </ul>
      </li>
    )

    const thankyouC = (
      <li className="thankyou-card">
        <img className="thank-img" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-heading">Thank You</h1>
        <p className="thank-para">
          We will use your feedback to improve our customer support performance.
        </p>
      </li>
    )

    // const {id, name, imageUrl} = emojis[0]
    // console.log(imageUrl)

    return (
      <ul className="bg-card">
        {!feedback ? feedbackC : thankyouC}
        {/* {feedbackC}
        {thankyouC} */}
        {/* <div className="emoji-main-card">
          <h1 className="emoji-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="emoji-img-card">
            <div className="btn-card">
              <button className="btn" type="button">
                <img className="emoji-img" src={imageUrl} alt="" />
              </button>
              <p className="emoji-name">Sad</p>
            </div>

            <div className="btn-card">
              <button className="btn" type="button">
                <img className="emoji-img" src={imageUrl} alt="" />
              </button>
              <p className="emoji-name">Sad</p>
            </div>

            <div className="btn-card">
              <button className="btn" type="button">
                <img className="emoji-img" src={imageUrl} alt="" />
              </button>
              <p className="emoji-name">Sad</p>
            </div>
          </div>
        </div> 

        <div className="thankyou-card">
          <img className="thank-img" src={loveEmojiUrl} alt="" />
          <h1 className="thank-heading">Thank You</h1>
          <p className="thank-para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div> */}
      </ul>
    )
  }
}

export default Feedback
