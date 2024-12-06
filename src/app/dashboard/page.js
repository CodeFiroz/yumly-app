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
        <h1>  Hello World</h1>
        </div>
      </main>

    </div>
    </>
  )
}

export default Dashboard