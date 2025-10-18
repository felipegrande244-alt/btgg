// Função para adicionar saldo BTG
function addBtgToUser(username, amount) {
    if (users[username]) {
        users[username].btgBalance += amount;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Se for o usuário atual, atualiza em tempo real
        if (currentUser === username) {
            btgBalance += amount;
            updateBalancesDisplay();
        }
        
        console.log(`Adicionado ${amount} BTG para ${username}`);
        showNotification(`${amount} BTG adicionados para ${username}`);
        return true;
    }
    console.log('Usuário não encontrado');
    return false;
}

// Função para adicionar saldo BRL
function addBrlToUser(username, amount) {
    if (users[username]) {
        users[username].brlBalance += amount;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Se for o usuário atual, atualiza em tempo real
        if (currentUser === username) {
            brlBalance += amount;
            updateBalancesDisplay();
            updateBuyBalance();
        }
        
        console.log(`Adicionado R$ ${amount} para ${username}`);
        showNotification(`R$ ${amount} adicionados para ${username}`);
        return true;
    }
    console.log('Usuário não encontrado');
    return false;
}

// Função para definir saldo BTG
function setBtgToUser(username, amount) {
    if (users[username]) {
        users[username].btgBalance = amount;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Se for o usuário atual, atualiza em tempo real
        if (currentUser === username) {
            btgBalance = amount;
            updateBalancesDisplay();
        }
        
        console.log(`Definido ${amount} BTG para ${username}`);
        showNotification(`Saldo BTG definido para ${amount}`);
        return true;
    }
    console.log('Usuário não encontrado');
    return false;
}

// Função para definir saldo BRL
function setBrlToUser(username, amount) {
    if (users[username]) {
        users[username].brlBalance = amount;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Se for o usuário atual, atualiza em tempo real
        if (currentUser === username) {
            brlBalance = amount;
            updateBalancesDisplay();
            updateBuyBalance();
        }
        
        console.log(`Definido R$ ${amount} para ${username}`);
        showNotification(`Saldo BRL definido para R$ ${amount}`);
        return true;
    }
    console.log('Usuário não encontrado');
    return false;
}

// Definir saldo exato de BRL
setBrlToUser("adminha", 500);