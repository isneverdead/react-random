import fbIcon from '../images/social-media/fb_ico.svg'
import igIcon from '../images/social-media/ig_ico.svg'
import pintersIcon from '../images/social-media/pinters_ico.svg'
import twitterIcon from '../images/social-media/twit_ico.svg'
const Footer = () => {
  return (
    <div className='footer bg-dark mt-5'>
      <div className='container text-center pt-5'>
        <div className='row'>
          <div className='col'>
            <img className='mx-3' src={fbIcon} alt='' />
            <img className='mx-3' src={igIcon} alt='' />
            <img className='mx-3' src={pintersIcon} alt='' />
            <img className='mx-3' src={twitterIcon} alt='' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col'>
            <span className='text-white'>HOME</span>{' '}
            <span className='text-white'>|</span>{' '}
            <span className='text-white'>MENU</span>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <p className='text-white'>
              &copy; KULINER.ID | ALL RIGHTS RESERVED 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
