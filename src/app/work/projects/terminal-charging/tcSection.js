import jamStyles from './tc.module.css'
import workStyles from 'app/work/works.module.css'
import Navbar from 'app/components/nav/nav'

export default function Home() {
  return (
    <section id={workStyles.SingleWork}>
      <div className={workStyles.singleWorkWrapper}>
        <div className={workStyles.singleWorkContainer}>
          <div className={workStyles.singleWorkNumber}>
            <h1>05</h1>
          </div>
          <div className={workStyles.workCardImg}>
            <img
              src="/img/mockup-bg/tc.jpg" alt="Terminal Charging"
            />
          </div>
          <div className={workStyles.workCardContentContainer}>
            <div className={workStyles.workCardTitle}>
              <h2>Terminal Charging</h2>
            </div>
            <div className={workStyles.workCardDesc}>
              <p>
              Plug into progress, charge into possibility. Terminal Charging sparks a brighter future with a network of accessible EV chargers. No detours, no dead ends, just seamless energy wherever you roam. Stop chasing stations, start chasing adventures. Recharge your world, one station at a time.

              </p>
            </div>
            <div className={workStyles.workCardInfo}>
              <div className={workStyles.projectInfoWrapper}>
                <div className={workStyles.projectInfo}>
                  <div className={workStyles.projectInfoLeft}>
                    <h6>Role</h6>
                  </div>
                  <div className={workStyles.projectInfoRight}>
                    <p>Product Designer</p>
                  </div>
                </div>
                <div className={workStyles.projectInfo}>
                  <div className={workStyles.projectInfoLeft}>
                    <h6>Project</h6>
                  </div>
                  <div className={workStyles.projectInfoRight}>
                    <p>Website Designer</p>
                  </div>
                </div>
                <div className={workStyles.projectInfo}>
                  <div className={workStyles.projectInfoLeft}>
                    <h6>Year</h6>
                  </div>
                  <div className={workStyles.projectInfoRight}>
                    <p>2022</p>
                  </div>
                </div>
              </div>
              <div className={workStyles.workCardLink}>
              <a href="./work/projects/terminal-charging/" className={workStyles.arrowIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
