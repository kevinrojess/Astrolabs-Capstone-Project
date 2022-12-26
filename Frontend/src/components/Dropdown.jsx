import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const gender = [
  "Women's",
  "Men's"
];

const clothes = [
  "Dresses",
  "Skirts",
  "Shirts & Blouses",
  "Pants",
  "Suits",
  "Shoes",
  "Accessories"
];

const room = [
  "Dining Room",
  "Living Room",
  "Bedroom",
  "Office"
];

const furniture = [
  "Chairs",
  "Tables",
  "Sofas",
  "Beds & Matresses",
  "Wardrobes",
  "Desks",
  "Bookcases & Shelves",
  "Carpets"
];

function getStyles(name, Data, theme) {
  return {
    fontWeight:
      Data.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown() {
  const theme = useTheme();
  const [genderName, setGenderName] = React.useState([]);
  const [clothesName, setClothesName] = React.useState([]);
  const [roomName, setRoomName] = React.useState([]);
  const [furnitureName, setFurnitureName] = React.useState([]);


  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setGenderName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setClothesName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setRoomName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setFurnitureName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <h4 className='mt-4'>Clothes</h4>
      <p>Select an option: </p>

      {/* 1st clothes box */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label"></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={genderName}
          onChange={handleChange1}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {gender.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, genderName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 2nd clothes box */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label"></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={clothesName}
          onChange={handleChange2}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {clothes.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, clothesName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 1st furniture box */}
      <h4 className='mt-5'>Furniture</h4>
      <p>Select an option: </p>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label"></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={roomName}
          onChange={handleChange3}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {room.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, roomName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 2nd furniture box */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label"></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={furnitureName}
          onChange={handleChange4}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {furniture.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, furnitureName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


  );
}