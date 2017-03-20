import buildRouter from './build_router'

/*
 * Returns Redux middleware
 */

export default function Router () {
  return buildRouter({}, ({ route, dispatch }) => {
    route('/', () => {
      dispatch({ type: 'route:change', page: 'HomeIndex' })
    })

    route('/timer', () => {
      dispatch({ type: 'route:change', page: 'TimerShow' })
    })

    route('/log', () => {
      dispatch({ type: 'route:change', page: 'LogIndex' })
    })
  })
}