import Abstract from "./abstract";

const createStats = ({
  id,
  value,
  check,
  forLabel,
  text
}) => {
  return `<input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="${id}" value="${value}" ${check}>
<label for="${forLabel}" class="statistic__filters-label">${text}</label>`;
};


export const createStatsTemplate = (detailsStats) => {
  return `<section class="statistic">
 <p class="statistic__rank">
   Your rank
   <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
   <span class="statistic__rank-label">Sci-Fighter</span>
 </p>

 <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
   <p class="statistic__filters-description">Show stats:</p>
   ${detailsStats.map(createStats).join(``)}
 </form>

 <ul class="statistic__text-list">
   <li class="statistic__text-item">
     <h4 class="statistic__item-title">You watched</h4>
     <p class="statistic__item-text">22 <span class="statistic__item-description">movies</span></p>
   </li>
   <li class="statistic__text-item">
     <h4 class="statistic__item-title">Total duration</h4>
     <p class="statistic__item-text">130 <span class="statistic__item-description">h</span> 22 <span class="statistic__item-description">m</span></p>
   </li>
   <li class="statistic__text-item">
     <h4 class="statistic__item-title">Top genre</h4>
     <p class="statistic__item-text">Sci-Fi</p>
   </li>
 </ul>

 <div class="statistic__chart-wrap">
   <canvas class="statistic__chart" width="1000"></canvas>
 </div>

</section>`;
};

export default class StatsMenu extends Abstract {
  constructor() {
    super();
    this._detailsStats = [{
      id: `statistic-all-time`,
      value: `all-time`,
      check: `checked`,
      forLabel: `statistic-all-time`,
      text: `All time`
    },
    {
      id: `statistic-today`,
      value: `today`,
      check: ``,
      forLabel: `statistic-today`,
      text: `Today`
    },
    {
      id: `statistic-week`,
      value: `week`,
      check: ``,
      forLabel: `statistic-week`,
      text: `Week`
    },
    {
      id: `statistic-month`,
      value: `month`,
      check: ``,
      forLabel: `statistic-month`,
      text: `Month`
    },
    {
      id: `statistic-year`,
      value: `year`,
      check: ``,
      forLabel: `statistic-year`,
      text: `Year`
    },
    ];
  }

  getTemplate() {
    return createStatsTemplate(this._detailsStats);
  }
}
