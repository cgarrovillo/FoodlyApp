import React from 'react'

export default function Card() {
  return (
    <div>
      <article className="card">
        <div className="card__info">
          <div className="info__details">
            <span className="details__subtitle">Category</span>
            <a>
              <h5 className="details__title">Blog Title</h5>
              <p className="details__summary">Summary/Bio</p>
            </a>
          </div>
          <div className="info__metadata">
            <span>Author G</span>
            <div>Last post on Sep 23</div>
          </div>
        </div>
        <div className="card__image img__wrapper">
          <img src="/indian.jpeg" />
        </div>
      </article>
    </div>
  )
}
