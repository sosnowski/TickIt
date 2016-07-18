namespace TickIt.Data

module Helpers =
    let nullToOption (value:System.Nullable<_>) =
        if value.HasValue then
            Some value.Value
        else
            None