// NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.
// Based on "crates/re_types/definitions/rerun/archetypes/disconnected_space.fbs"

#include "disconnected_space.hpp"

#include "../components/disconnected_space.hpp"

#include <arrow/api.h>

namespace rr {
    namespace archetypes {
        arrow::Result<std::vector<rr::DataCell>> DisconnectedSpace::to_data_cells() const {
            std::vector<rr::DataCell> cells;
            cells.reserve(1);

            {
                ARROW_ASSIGN_OR_RAISE(
                    const auto cell,
                    rr::components::DisconnectedSpace::to_data_cell(&disconnected_space, 1)
                );
                cells.push_back(cell);
            }

            return cells;
        }
    } // namespace archetypes
} // namespace rr