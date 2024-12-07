import DashboardHeader from '../_components/DashboardHeader/DashboardHeader'
import DashboardSidebar from '../_components/DashboardSidebar/DashboardSidebar'
import style from './dashboard.module.css'

const Dashboard = () => {
  return (
    <>
    <div className={style.dashboardWrapper}>

      <DashboardSidebar />

      <main>
        <DashboardHeader />
        <div className={style.wrapper}>

            <div className={style.reviewGrid}>

              <div className={style.box}>
                <div>
                  <h4>120</h4>
                  <p>Food Menus</p>
                </div>
                <div className={style.icon}>
                  <i className="fi fi-rr-rectangle-list"></i>
                </div>
              </div>

              <div className={style.box}>
                <div>
                  <h4>120</h4>
                  <p>Orders</p>
                </div>
                <div className={style.icon}>
                  <i className="fi fi-rr-box"></i>
                </div>
              </div>

              <div className={style.box}>
                <div>
                  <h4>120</h4>
                  <p>Food Menus</p>
                </div>
                <div className={style.icon}>
                  <i className="fi fi-rr-rectangle-list"></i>
                </div>
              </div>

              <div className={style.box}>
                <div>
                  <h4>120</h4>
                  <p>Food Menus</p>
                </div>
                <div className={style.icon}>
                  <i className="fi fi-rr-rectangle-list"></i>
                </div>
              </div>

            </div>


        </div>
      </main>

    </div>
    </>
  )
}

export default Dashboard