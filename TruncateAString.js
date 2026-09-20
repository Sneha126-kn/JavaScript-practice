function truncateString(st, n){
  if (st.length > n){
    return st.slice(0,n)+"..."
  }
  else{
    return st
  }
}
