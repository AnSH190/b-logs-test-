import React, { useState } from 'react'

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  onClose,
}: {
  onClose: () => void;
}) => {

    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      console.log(searchQuery);
      
    };


    const searchQueryResults = [
      {
        id: 1,
        message: "Search Result 1",
      },
      {
        id: 2,
        message: "Search Result 2",
      },
      {
        id: 3,
        message: "Search Result 3",
      },
    ];

    console.log(searchQueryResults);
    

    

  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-4">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputChange}
          />
        <div className="flex justify-between">
            <p className='border-2 border-gray-500 rounded-xl text-left p-2'>Serach results dummy</p>
        </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={onClose}
        >
          Close
        </label>
      </div>
    </div>
  );
};

export default SearchModal