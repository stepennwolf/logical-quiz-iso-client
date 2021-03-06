/**
 * Provides collection of reusable reducer functions
 */

export function enableIdle ( state ) {
  return state.set( 'isIdle', true );
}



export function disableIdle ( state ) {
  return state.set( 'isIdle', false );
}



export function enableFetching ( state ) {
  return state.set( 'isFetching', true );
}



export function disableFetching ( state ) {
  return state.set( 'isFetching', false );
}



export function setFetchableFailure ( state, payload ) {
  return state.merge({
    isFetching: false,
    isFetchingFailed: true,
    fetchingFailedReason: payload.error || null,
  });
}



export function resetFetchableFailure( state ) {
  return state.merge({
    isFetchingFailed: false,
    fetchingFailedReason: null,
  });
}



export function addItemsToList( state, payload ) {
  return state.update( 'items', items => items.concat( payload.items ) );
}



export function clearListItems( state ) {
  return state.update( 'items', items => items.clear() );
}



export function refreshLastUpdate( state ) {
  return state.set( 'lastUpdate', Date.now() );
}
