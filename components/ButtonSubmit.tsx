import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";


const ButtonSubmit = ({loading}: {loading: boolean}) => {
    return(
        <Button type="submit" className="payment-transfer_btn">
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
              </>
            ) : (
              "Transfer Funds"
            )}
        </Button>
    )
}

export default ButtonSubmit