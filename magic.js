const magic = () => {
  const userListNode = document.getElementById('user-list')
  const userCountNode = document.getElementById('user-count')

  let userCount = 0

  oboe('http://localhost:8081/users')
    .node('!{name}', (user) => {
      setTimeout(() => {
        userCountNode.innerHTML = ++userCount
        userListNode.innerHTML += user.name + ' '
      })
    })
    .node('[999]', function () { this.abort() })
}
