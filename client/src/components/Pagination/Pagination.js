import React from 'react'
import styles from './Pagination.module.css'
import classNames from 'classnames';


export default function Pagination({totalEvents,currentPage,countViewEvents,changePage}) {

    const pages = []
    const numberOfPages = Math.ceil(totalEvents/countViewEvents)

    for(let i=currentPage; i<=numberOfPages ; i++){
        if(i > currentPage+2 && i === numberOfPages-2){
            pages.push('...')
        }else if(i <= currentPage+2 || i === numberOfPages){
            pages.push(i)
        }
    }

    const paginationHandler = (e)=>{
        changePage(Number(e.target.textContent))
    }
    const nextPage=()=>{
        if(currentPage !==numberOfPages){
            changePage(currentPage+1)
        }
    }

    const prevPage=()=>{
        if(currentPage !==1){
            changePage(currentPage-1)
        }
    }

  return (
    <div className={styles['page-nav']}>
        <button className={styles['page-btn']} onClick={prevPage}>&#171;</button>
        {pages.map((number) => {
            if(number === currentPage){
                return <span className={styles['page-current']} onClick={paginationHandler} key={number}>{number}</span>
            }
            if(typeof number === 'number'){
                return <span className={styles.page} onClick={paginationHandler} key={number}>{number}</span>
            }else{
                return <span className={styles.page} key={0}>{number}</span>
            }
        }
        )}
        <button className={styles['page-btn']} onClick={nextPage}>&#187;</button>
    </div>
  )
}
