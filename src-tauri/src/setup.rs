use std::sync::Mutex;
use tauri::{AppHandle, Manager};
use tokio::time::{sleep, Duration};

use crate::{commands::set_complete, state::SetupState};

pub(crate) async fn setup(app: AppHandle) -> Result<(), ()> {
    println!("Performing really heavy backend setup task...");
    sleep(Duration::from_secs(6)).await;
    println!("Backend setup task completed!");
    set_complete(
        app.clone(),
        app.state::<Mutex<SetupState>>(),
        "backend".to_string(),
    )
    .await?;
    Ok(())
}
