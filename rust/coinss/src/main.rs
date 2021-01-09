

#[derive(Debug)] // so we can inspect the state in a minute
enum UsState {
    Alabama,
    Alaska,
    // --snip--
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    LLama,
    Elephant,
    Quarter(UsState),
}

fn value_in_cents(coin: Option<Coin>) -> u8 {
    match coin {
        Some(coin) => {
            match coin {
                Coin::Penny => 1,
                Coin::Nickel => 5,
                Coin::Dime => 10,
                Coin::Quarter(state) => {
                    println!("State quarter from {:?}!", state);
                    25
                }
                _ => 0,
            }
        },
        None => 0,
    }
}

fn main() {
    let mut cents = value_in_cents(Some(Coin::Quarter(UsState::Alaska)));
    println!("Hello, {0}!", cents);
    cents = value_in_cents(None);
    println!("Hello, {0}!", cents);
}
