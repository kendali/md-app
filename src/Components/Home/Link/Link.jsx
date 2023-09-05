import './Link.css'
function Link() {
  return (
    <div className="link container p-5 mt-5">
      <h6 className='text-white text-center display-5 fw-bold'>Join Our<span className='text-second'> Community</span></h6>
      <p className='lead text-white text-center'>The First Community For Moroccan Developers </p>
      <div className="icon d-flex justify-content-center align-items-center gap-5">
        <a href="https://www.facebook.com/profile.php?id=100089737980210&mibextid=2JQ9oc" className='md-icon'>
            <img src="https://ucarecdn.com/2f6808d1-5815-4aea-9bbe-0914dee657f7/icons8facebook1.svg" className='img-fluid' alt="" />
        </a>
        <a href="https://www.instagram.com/moroccandevelper/" className='md-icon'>
            <img src="https://ucarecdn.com/6f66583b-0a99-4fe3-9300-16c788da84a8/icons8instagram.svg" className='img-fluid' alt="" />
        </a>
        <a href="" className='md-icon'>
            <img src="https://ucarecdn.com/77b76af4-8628-412e-a768-b415a6d0ba03/icons8telegram.svg" className='img-fluid' alt="" />
        </a>
      </div>
    </div>
  )
}
export default Link
