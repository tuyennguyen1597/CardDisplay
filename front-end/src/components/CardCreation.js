import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { checkBin } from '../actions/checkInputs';
import { connect } from 'react-redux'

const CardCreation = ({checkBin, bin: {bin, loading}}) => {
  const [cardData, setCardData] = useState({
    accountName: '',
    cardNumber: '0',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
  });
  
  useEffect(()=> {
    checkBin(cardNumber)
  }, [cardData])
  
  let { accountName, cardNumber, expirationMonth, expirationYear, cvv } =
    cardData;

  const onChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  
  return (loading === true && bin === null ) ? (<div>
    <div className='card-inputs'>
      <div className='form-div'>
        <div className='card'>
          <div className='card-header'>
            <h6></h6>
          </div>

          <div className='card-body'>
            <h5>{cardNumber}</h5>
            <p>expired date</p>
          </div>

          <div className='card-bottom'>
            <p>{accountName}</p>
            <p>Bank Type</p>
          </div>
        </div>
        <form className='create-card' action=''>
          <div className='card-num'>
            <label for='cardNumber'>Card Number:</label>
            <input
              type='text'
              name='cardNumber'
              id='cardNumber'
              value={cardNumber}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='card-name'>
            <label for='accountName'>Card Name:</label>
            <input
              type='text'
              name='accountName'
              id='accountName'
              value={accountName}
              onChange={(e) => onChange(e)}
            />
            <p>hi</p>
          </div>

          <div className='expiration'>
            <div>
              <label for='date'>Expiration Date:</label>
              <div id='date'>
                <input
                  type='text'
                  name='expirationMonth'
                  id='expirationMonth'
                  placeholder='Month'
                  value={expirationMonth}
                  onChange={(e) => onChange(e)}
                />
                <input
                  type='text'
                  name='expirationYear'
                  id='expirationYear'
                  placeholder='Year'
                  value={expirationYear}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <p>hi</p>
            </div>
            <div>
              <label for='cvv'>CVV</label>
              <input
                type='text'
                name='cvv'
                id='cvv'
                value={cvv}
                onChange={(e) => onChange(e)}
              />
              <p>hi</p>
            </div>
          </div>

          <button className='create-btn' type='submit'>
            Create Card
          </button>
        </form>
      </div>
    </div>
  </div>) : (
    <div>
      <div className='card-inputs'>
        <div className='form-div'>
          <div className='card'>
            <div className='card-header'>
              <h6>{bin.bank_name}</h6>
            </div>

            <div className='card-body'>
              <h5>{cardNumber}</h5>
              <p><span>{expirationMonth}</span>/<span>{expirationYear}</span></p>
            </div>

            <div className='card-bottom'>
              <p>{accountName}</p>
              <p>{bin.scheme}</p>
            </div>
          </div>
          <form className='create-card' action=''>
            <div className='card-num'>
              <label for='cardNumber'>Card Number:</label>
              <input
                type='text'
                name='cardNumber'
                id='cardNumber'
                value={cardNumber}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='card-name'>
              <label for='accountName'>Card Name:</label>
              <input
                type='text'
                name='accountName'
                id='accountName'
                value={accountName}
                onChange={(e) => onChange(e)}
              />
              <p>hi</p>
            </div>

            <div className='expiration'>
              <div>
                <label for='date'>Expiration Date:</label>
                <div id='date'>
                  <input
                    type='text'
                    name='expirationMonth'
                    id='expirationMonth'
                    placeholder='Month'
                    value={expirationMonth}
                    onChange={(e) => onChange(e)}
                  />
                  <input
                    type='text'
                    name='expirationYear'
                    id='expirationYear'
                    placeholder='Year'
                    value={expirationYear}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <p>hi</p>
              </div>
              <div>
                <label for='cvv'>CVV</label>
                <input
                  type='text'
                  name='cvv'
                  id='cvv'
                  value={cvv}
                  onChange={(e) => onChange(e)}
                />
                <p>hi</p>
              </div>
            </div>

            <button className='create-btn' type='submit'>
              Create Card
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

CardCreation.propTypes = {
  checkBin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bin: state.bin
}
)
export default connect(mapStateToProps, {checkBin})(CardCreation);
