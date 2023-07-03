use cosmwasm_std::{Decimal, StdError};
use thiserror::Error;

/// This enum describes factory contract errors
#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Invalid value for trading start")]
    InvalidTradingStart {},

    #[error("Unauthorized")]
    Unauthorized {},

    #[error("Pair was already created")]
    PairWasCreated {},

    #[error("Pair was already registered")]
    PairWasRegistered {},

    #[error("Duplicate of pair configs")]
    PairConfigDuplicate {},

    #[error("Fee bps in pair config must be smaller than or equal to 10,000")]
    PairConfigInvalidFeeBps {},

    #[error("Pair config not found")]
    PairConfigNotFound {},

    #[error("Pair config disabled")]
    PairConfigDisabled {},

    #[error("Doubling assets in asset infos")]
    DoublingAssets {},

    #[error("Invalid referral commision: {0}")]
    InvalidReferralCommission(Decimal),

    #[error("Can only init upgrade from cw-placeholder")]
    NotPlaceholder,
}